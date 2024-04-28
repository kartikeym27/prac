# Portfolio
# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('login.html')

# if __name__ == '__main__':
#     app.run(debug=True)



# Weather App

# from flask import Flask, render_template,request

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('/index.html')

# @app.route('/weather', methods=['POST'])
# def weather():
#     city = request.form['city']

#     weather_data ={
#         'city' : city,
#         'temperature': 25,
#         'description': "sunny",
#         'icon': '01d',
#     }
#     return render_template('/weather.html',weather = weather_data)

# if __name__ == "__main__":
#     app.run(debug=True, host='localhost', port=4200)


# from flask import Flask, render_template, request, redirect, url_for

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('feedback.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     feedback = request.form['feedback']
#     return redirect(url_for('show_feedback', feedback=feedback))

# @app.route('/show_feedback')
# def show_feedback():
#     feedback = request.args.get('feedback')
#     return render_template('index.html', feedback=feedback)

# if __name__ == '__main__':
#     app.run(debug=True)



# from flask import Flask,render_template

# app = Flask(__name__)

# blog_posts = [
#     {
#         'id': 1,
#         'title': 'First Post',
#         'content': 'This is the content of the first post.'
#     },
#     {
#         'id': 2,
#         'title': 'Second Post',
#         'content': 'This is the content of the second post.'
#     }
# ]


# @app.route('/')
# def index():
#     return render_template('index3.html',posts = blog_posts)

# @app.route('/post/<int:post_id>')
# def post(post_id):  
#     post = next((post for post in blog_posts if post['id'] == post_id),None)

#     if post:
#         return render_template("post.html",post=post)
#     else:
#         return "Post Not Found", 404
# if __name__ == "__main__":
#     app.run(debug=True,host='localhost',port=4200)



# from flask import Flask, render_template, request

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index4.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     if request.method == 'POST':
#         name = request.form['name']
#         email = request.form['email']
#         message = request.form['message']
#         return render_template('result.html', name=name, email=email, message=message)

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index5.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        # Password validation regular expression
        passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'

        if not re.match(passwordRegex, password):
            return jsonify({'error': 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'})

        return render_template('submit.html', name=name, email=email, password=password)

if __name__ == '__main__':
    app.run(debug=True)
