from fastapi import FastAPI, APIRouter
import sys
import os

root_dir = os.path.dirname(__file__)
sys.path.insert(0, os.path.join(root_dir, "src"))

from routers import blog_router, user_router

blogger_app = FastAPI()

# Top level prefix for all routers
blogger_route = APIRouter(
    prefix="/blogger-api"
)

blogger_route.include_router(blog_router)
blogger_route.include_router(user_router)

blogger_app.include_router(blogger_route)