from sqlalchemy import Integer, String, DateTime, ForeignKey, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from datetime import datetime

from models._base import Base

class Blog(Base):
    __tablename__ = "blog"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(25))
    author_id: Mapped[int] = mapped_column(
        ForeignKey("author.id")
    )
    author: Mapped["Author"] = relationship(
        back_populates="blogs"
    )
    banner: Mapped[dict] = mapped_column(JSON)
    body: Mapped[dict] = mapped_column(JSON)
    published_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        insert_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        onupdate=func.now()
    )