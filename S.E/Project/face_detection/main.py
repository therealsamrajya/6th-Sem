import streamlit as st
import pickle
import numpy as np
from PIL import Image
import cv2

model = pickle.load(open("./trained_model.sav", "rb"))


def predict(image):
    # Pre Processing
    image_RGB = image.convert("RGB")
    image_npArray = np.array(image_RGB)
    image_resized = cv2.resize(image_npArray, (128, 128))
    image_scaled = image_resized / 255
    input_image_reshaped = np.reshape(image_scaled, [1, 128, 128, 3])

    # Prediction
    prediction = model.predict(input_image_reshaped)
    pred_label = np.argmax(prediction)
    return pred_label


def display_text_with_color(text, color):
    st.markdown(
        f'<div style="background-color:{color};padding:10px;border-radius:10px">{text}</div>',
        unsafe_allow_html=True,
    )


def main():
    st.title("Face Mask Detection")

    uploaded_image = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

    if uploaded_image is not None:
        image = Image.open(uploaded_image)
        st.image(image, caption="Uploaded Image", use_column_width=True)

        if st.button("Detect Face Mask"):
            prediction = predict(image)
            if prediction == 1:
                display_text_with_color("Face mask detected", "green")
            else:
                display_text_with_color("No face mask detected", "red")


if __name__ == "__main__":
    main()