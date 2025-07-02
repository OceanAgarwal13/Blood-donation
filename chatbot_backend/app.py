from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow cross-origin from frontend

# Define the chatbot reply logic
def get_reply(user_message):
    user_message = user_message.lower()

    if any(word in user_message for word in ['hello', 'hi', 'hey','hi']):
        return "Hello! 👋 How can I help you today?"

    elif any(word in user_message for word in ['donate blood', 'blood donation', 'how to donate']):
        return "🩸 You can donate blood by visiting our 'Book Appointment' section or nearby centers."

    elif any(word in user_message for word in ['where are centers', 'center location', 'blood center', 'centers', 'center']):
        return "🏥 We have blood donation centers in Gwalior and Jhansi."

    elif any(word in user_message for word in ['eligibility', 'who can donate']):
        return "✅ You can donate if you're healthy, aged 18–65, and weigh over 50kg."

    elif any(word in user_message for word in ['frequency', 'how often', 'donate again']):
        return "📅 You can donate whole blood every 3 months and platelets every 2 weeks."

    elif any(word in user_message for word in ['requirements', 'what to bring', 'documents']):
        return "📝 Please bring a valid ID, eat a healthy meal before donating, and stay hydrated."

    elif any(word in user_message for word in ['thanks', 'thank you']):
        return "You're welcome! 😊 Let me know if you need anything else."

    elif any(word in user_message for word in ['help', 'support','ok','okay']):
        return "🤖 I'm here to help. You can ask about donation, centers, appointments, or eligibility."

    else:
        return "❓ Sorry, I didn’t get that. Try asking about blood donation, eligibility, or centers."


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '').strip()
    reply = get_reply(user_message)
    return jsonify({'reply': reply})


if __name__ == '__main__':
    app.run(port=5000)
