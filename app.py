from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

STATIC_PROJECTS = [
    {
        'id': 1,
        'title': 'ML Model from Scratch',
        'description': 'Built core Machine Learning algorithms like Linear Regression and Gradient Descent purely from scratch using NumPy to deeply understand their mathematical foundations.',
        'tech': ['Python', 'NumPy', 'Linear Algebra'],
        'github': 'https://github.com/rai-umais/Machine-Learning-Practice-and-Problems',
        'live': ''
    },
    {
        'id': 2,
        'title': 'Collabify',
        'description': 'A Blend of Upwork and Jira, where the Clients and Freelancers interact, build and manage project flow, and Admin manages the platform.',
        'tech': ['JAVA - Spring_boot', 'React', 'PostgreSQL'],
        'github': 'https://github.com/Collabify-Project/Kollabify',
        'live': ''
    },
    {
        'id': 3,
        'title': 'QR-Attendance System',
        'description': 'A fast, robust and proxy free QR based attendance system, where the QR refreshes every 25 second and the students can seamlessly mark there attendance in a few seconds. Only requirement: A good internet.',
        'tech': ['Python', 'Flask', 'PostgreSQL'],
        'github': 'https://github.com/rai-umais/QR_Automated_Attendance_System',
        'live': ''
    },
    {
        'id': 4,
        'title': 'VORTX Game Store',
        'description': 'Built a functional Gaming marketplace, where you can upload a game and check the ratings, find the best match for you, see the top trending games and order one. Lets you experience a market with all types of games and no restrictions.', 
        'tech': ['Node JS', 'React', 'MSSQL'],
        'github': 'https://github.com/rai-umais/Machine-Learning-Practice-and-Problems',
        'live': ''
    }
]

@app.route('/')
def index():
    # Only show 'Add Project' and 'Delete' options if ?admin=true is in the URL
    is_admin = request.args.get('admin') == 'true'
    return render_template('index.html', projects=STATIC_PROJECTS, is_admin=is_admin)

if __name__ == '__main__':
    app.run(debug=True)
