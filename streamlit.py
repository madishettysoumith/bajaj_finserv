import streamlit as st

# Title of the app
st.title("Simple Streamlit App")

# User input text box
user_input = st.text_input("Enter some text:")

# Display the input text
if user_input:
    st.write("You entered:", user_input)

# Add a button
if st.button("Click Me"):
    st.write("Button clicked!")

# Uploading files
uploaded_file = st.file_uploader("Choose a file")
if uploaded_file is not None:
    st.write("Uploaded file:", uploaded_file.name)
