from flask import Flask, request, render_template, jsonify
# Import your model and image generation function here

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    text = request.form['text']
    # Generate image from text
    image_path = generate_image_from_text(text)
    return jsonify({'image_path': image_path})

if __name__ == '__main__':
    app.run(debug=True)
