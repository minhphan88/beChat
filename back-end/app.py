from flask import Flask, request, jsonify

from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api', methods=['POST'])
def echo():
    data = request.json
    message = data.get('message', '')
    response = {
        "status": "success",
        "message": "default reply by back-end API",
        "data": {
            "additionalInfo": "Some additional information if needed"
        }
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
