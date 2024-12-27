from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.form['user_input']
    # Add your chatbot logic here
    bot_response = f"You said: {user_input}" 
    return bot_response

if __name__ == '__main__':
    app.run(debug=True)