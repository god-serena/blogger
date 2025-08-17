from sqlalchemy import Integer, JSON, String, DateTime, ForeignKey
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from typing import Optional, List
from datetime import datetime

from models._base import Base


class UserProfile(Base):
    __tablename__ = "user_profile"
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(String(25))
    last_name: Mapped[str] = mapped_column(String(25))
    user_name: Mapped[str] = mapped_column(String(25))
    email: Mapped[str] = mapped_column(
        String(50),
        unique=True
    )
    password: Mapped[str] = mapped_column(String(200))
    avatar_data: Mapped[Optional[dict]] = mapped_column(JSON())
    registered_at: Mapped[Optional[datetime]] = mapped_column(
        DateTime(timezone=True),
        insert_default=func.now()
    )
    """
    The uselist arg can be dropped as the ORM can infer
    from the Mapped type hint that it will be a one-to-one
    or many-to-one relationship (which would be different
    if typed as Mapped[List["Author"]] and becomes a
    one-to-many)
    """
    author: Mapped[Optional["Author"]] = relationship(
        uselist=False,
        backref="user_profile"
    )
    """
    The backref is legacy arg. It allows for concise, but
    less explicit declaration of relationship between two
    tables. In this case, the Reader table automatically
    gets its user_profile column without defining the
    relationship there.
    """
    reader: Mapped[Optional["Reader"]] = relationship(
        uselist=False,
        backref="user_profile"
    )

    def __init__(self, **kw):
        super().__init__(**kw)

    def __str__(self):
        return f"User: {self.full_name} ({self.id})"

    @hybrid_property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def avatar_url(self):
        return self.avatar_data.get("url") if self.avatar_data else None


class Author(Base):
    __tablename__ = "author"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_profile_id: Mapped[int] = mapped_column(
        ForeignKey("user_profile.id")
    )
    """
    Unlike backref, back_populates enables explicit
    , but clear definition of the bidirectional
    relationship between two tables. In this case,
    the relationship has to be indicated in the 
    two classes.
    """
    blogs: Mapped[List["Blog"]]  = relationship(
        back_populates="author"
    )
    writer: Mapped["Writer"] = relationship(
        back_populates="author"
    )
    """
    The foreign key has to be explicitly
    defined as SQLAlchemy does not automatically
    generate it (unlike Django). But it can be
    omitted, however at the cost of performance,
    as the query has to traverse to the related
    model to access its id (model.related_model.id
    vs model.related_model_id)
    """
    writer_id: Mapped[int] = relationship(
        ForeignKey("writer.id")
    )
    

class Reader(Base):
    __tablename__ = "reader"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_profile_id: Mapped[int] = mapped_column(
        ForeignKey("user_profile.id")
    )


class Writer(Base):
    __tablename__ = "writer"
    id: Mapped[int] = mapped_column(primary_key=True)
    author: Mapped["Author"] = relationship(
        back_populates="writer",
    )
    author_id: Mapped[int] = relationship(
        ForeignKey("author.id")
    )
