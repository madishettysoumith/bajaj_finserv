from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['GET'])
def fetch_operation_code():
    return jsonify({"operation_code": 1}), 200

@app.route('/bfhl', methods=['POST'])
def handle_data():
    try:
        input_data = request.json.get("data", [])
        user_identifier = "john_doe_17091999"  # Update as necessary
        user_email = "john@xyz.com"
        student_id = "ABCD123"

        extracted_numbers = [item for item in input_data if item.isdigit()]
        extracted_alphabets = [item for item in input_data if item.isalpha()]
        top_alphabet = [max(extracted_alphabets, key=lambda x: x.lower())] if extracted_alphabets else []

        result = {
            "is_success": True,
            "user_id": user_identifier,
            "email": user_email,
            "roll_number": student_id,
            "numbers": extracted_numbers,
            "alphabets": extracted_alphabets,
            "highest_alphabet": top_alphabet
        }
        return jsonify(result), 200
    except Exception as error:
        return jsonify({"is_success": False, "error": str(error)}), 400

if __name__ == '__main__':
    app.run(debug=True)