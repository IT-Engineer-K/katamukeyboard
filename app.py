from flask import Flask, render_template
import pyautogui
from waitress import serve

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/press/<key>')
def press(key):
    pyautogui.press(key)
    return ''

serve(app, host='0.0.0.0', port=8000)