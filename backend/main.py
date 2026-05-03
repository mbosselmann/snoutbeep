from fastapi import FastAPI, HTTPException

app = FastAPI()

current_option = "letterGlitch"

@app.get("/option", response_model=str)
async def get_option():
    print("get_option", current_option)
    return current_option


@app.post("/option", response_model=dict)
async def set_option(option: str):
    global current_option
    current_option = option
    return {"message": "Option updated successfully", "option": current_option}