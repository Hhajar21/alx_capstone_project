from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def contact_form():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Save data to SQL database (SQLite in this example)
    conn = sqlite3.connect('contact_data.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', (name, email, message))
    conn.commit()
    conn.close()

    # You can use JavaScript to show an alert and clear the input fields
    alert_message = "Form submitted successfully!"
    return render_template('index.html', alert_message=alert_message)

if __name__ == '__main__':
    app.run(debug=True)
