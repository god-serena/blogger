from fastapi import APIRouter


user_router = APIRouter(
    prefix="/user",
    tags=["user"]
)

blog_router = APIRouter(
    prefix="/blog",
    tags=["blog"]
)

import api.user  # noqa
