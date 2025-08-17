import jwt
from datetime import datetime, timezone
from typing import TypedDict
from schema.user import UserSignUp
from settings import settings


def generate_access_token(
        data: dict
) -> str:
    return jwt.encode(
        {
            "user_id": data["user"].id,
            "exp": datetime.now(timezone.utc)
            + settings.ACCESS_TOKEN_LIFETIME,
            "iat": datetime.now(timezone.utc),
            "type": "access"
        },
        settings.SECRET_KEY,
        algorithm="HS256"
    )

def generate_access_token(
        data: dict
) -> str:
    return jwt.encode(
        {
            "user_id": data["user"].id,
            "exp": datetime.now(timezone.utc)
            + settings.REFRESH_TOKEN_LIFETIME,
            "iat": datetime.now(timezone.utc),
            "type": "refresh"
        },
        settings.SECRET_KEY,
        algorithm="HS256"
    )

def decode_token(
        token: str
) -> dict:
    return jwt.decode(
        token,
        settings.SECRET_KEY,
        algorithms="HS256",
        options={ "verify_exp": True }
    )