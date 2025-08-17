from routers import user_router as router
from schema.user import UserSignUp, Role
from typing import Annotated
from fastapi import Body
from db import session
from models.user import UserProfile, Reader, Author
from sqlalchemy import select

@router.post("/sign-up")
def sign_up(payload: Annotated[UserSignUp, Body()]):
    data = payload.model_dump()
    try:
        exists = session.execute(
            select(UserProfile.email)
            .where(UserProfile.email==data.get("email"))
        ).scalar_one_or_none()

        if exists:
            raise Exception("User already exists.")
        
        role = data.pop("role")
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        # TO DO: Securely store password
        password = data.pop("password")
        user_name = f"{first_name}.{last_name}".lower()

        new_user = UserProfile(
            **data,
            user_name=user_name,
            password=password
        )

        session.add(new_user)
        session.flush()

        if role == Role.AUTHOR:
            author = Author(user_profile_id=new_user.id)
            session.add(author)
        elif role == Role.READER:
            reader = Reader(user_profile_id=new_user.id)
            session.add(reader)
    except Exception as e:
        print(e)
        session.rollback()
    else:
        session.commit()
    finally:
        session.close()
    
    return {"Hee": str(1)}