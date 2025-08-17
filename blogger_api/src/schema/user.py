from pydantic import BaseModel
from enum import IntEnum

class Role(IntEnum):
    AUTHOR = 0
    READER = 1

class UserSignUp(BaseModel):
    email: str
    first_name: str
    last_name: str
    password: str
    role: Role

class UserProfile(BaseModel):
    email: str
    first_name: str
    last_name: str
    role: Role
    username: str

class MeData(BaseModel):
    user_profile: UserProfile
    access_token: str
    refresh_token: str