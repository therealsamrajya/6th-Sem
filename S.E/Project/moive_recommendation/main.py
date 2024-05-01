import pickle
import streamlit as st
import pandas as pd
import difflib
from sklearn.metrics.pairwise import cosine_similarity


model = pickle.load(open("./trained_model.sav", "rb"))
movie_data = pd.read_csv("./movies.csv")


def Recommend(movie_name):
    recommendation_list = []
    similarity = cosine_similarity(model)

    list_of_all_titles = movie_data["title"].tolist()

    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    close_match = find_close_match[0]

    index_of_the_movie = movie_data[movie_data.title == close_match]["index"].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))

    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    print("movies suggested for you: \n")
    i = 1
    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movie_data[movie_data.index == index]["title"].values[0]
        if i <= 30:
            recommendation_list.append(title_from_index)
            i += 1

    return recommendation_list


def main():
    st.title("Movie Recommendation web app")

    movie_name = st.text_input("Enter movie name")
    recommendation = []

    if st.button("CHECK RESULT"):
        recommendation = Recommend(movie_name=movie_name)

    for x in range(len(recommendation)):
        st.success(recommendation[x])


if __name__ == "__main__":
    main()
