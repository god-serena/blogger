from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from settings import settings

blogger_engine = create_engine(settings.SQLALCHEMY_DATABASE_URL, echo=False)
session = Session(blogger_engine)