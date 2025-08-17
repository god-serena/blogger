from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SQLALCHEMY_DATABASE_URL: str = "postgresql://user:password@blogger_db:5432/blogger_db"
    DEBUG: bool = False
    ACCESS_TOKEN_LIFETIME: int = 1
    REFRESH_TOKEN_LIFETIME: int = 7
    SECRET_KEY: str = "blogger_api_dev"

settings = Settings()