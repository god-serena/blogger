from fastapi import FastAPI

blogger_app = FastAPI()

@blogger_app.get("/")
def read_root():
    return {"Hello": "World"}