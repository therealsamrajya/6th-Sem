import numpy as np
import pickle
import streamlit as st


loaded_model=pickle.load(open('C:/Users/DELL.DESKTOP-C17F0G2/Desktop/6TH SEM/S.E/Project/trained_model.sav','rb'))  

def diabetic_prediction(input_data):
    #input_data = (5,116,74,0,0,25.6,0.201,30)
    #changing this list type of data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)
    #now reshape the data to make it work for 1 single data bcoz our system was trained only for 768 data
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
    #now value cannot be given directly it must be standarised
    #std_data=scaler.transform(input_data_reshaped)
    #print(std_data)
    prediction = loaded_model.predict(input_data_reshaped)
    print(prediction)
    if prediction[0]==0:
      print("noot dibetic")
    else:
      print("dibetic")

def main():
    st.title('Diabetes prediction web app')
    #title is a function like a header in streamlit library
    Pregnancies=st.text_input('Number of pregnancies')
    #st.text_input function takes the data from user as input
    Glucose=st.text_input('Glucose Level')
    BloodPressure=st.text_input('Blood pressure value')
    SkinThickness=st.text_input('Skin Thickness Value')
    Insulin=st.text_input('Insulin value')
    BMI=st.text_input('BMI value')
    DiabetesPedigreeFunction=st.text_input('Diabetes Pedigree function value')
    Age=st.text_input('Age of a person')

    diagnosis= ''
    if st.button('CHECK RESULT'):
        diagnosis=diabetic_prediction([Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age])
    st.success(diagnosis)  

if __name__ == '__main__':
    main()
    