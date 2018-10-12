from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_philo.db.postgresql.connection import get_pool
from flask_philo.db.postgresql.orm import BaseModel
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://'

class Survey(BaseModel, db.Model):
    """Model for the Survey table"""
    __tablename__ = 'Survey'

    survey_id = Column(String, primary_key = True)
    description = Column(String)

class Trainer_Survey_Relation(BaseModel, db.Model):
    """Model for the Trainer_Survey_Relation table"""
    __tablename__ = 'Trainer_Survey_Relation'

    trainer_id = Column(String, primary_key = True)
    survey_id = Column(String)

class Question(BaseModel, db.Model):
    """Model for the Question table"""
    __tablename__ = 'Question'

    question_id = Column(String, primary_key = True)
    description = Column(String)
    keystone = Column(String)
    positive = Column(String)
    score = Column(String)

class Survey_Question_Relation(BaseModel, db.Model):
    """Model for the Survey_Question_Relation table"""
    __tablename__ = 'Survey_Question_Relation'

    survey_id = Column(String, primary_key = True)
    question_id = Column(String)

class Student(BaseModel, db.Model):
    """Model for the Student table"""
    __tablename__ = 'Student'

    student_id = Column(String, primary_key = True)
    name = Column(String)
    password = Column(String)
    pre_score1 = Column(String)
    pre_score2 = Column(String)
    pre_score3 = Column(String)
    pre_score4 = Column(String)
    pre_score5 = Column(String)
    post_score1 = Column(String)
    post_score2 = Column(String)
    post_score3 = Column(String)
    post_score4 = Column(String)
    post_score5 = Column(String)
    school_id = Column(String)

class School(BaseModel, db.Model):
    """Model for the School table"""
    __tablename__ = 'School'

    school_id = Column(String, primary_key = True)
    name = Column(String)
    pre_score1 = Column(String)
    pre_score2 = Column(String)
    pre_score3 = Column(String)
    pre_score4 = Column(String)
    pre_score5 = Column(String)
    post_score1 = Column(String)
    post_score2 = Column(String)
    post_score3 = Column(String)
    post_score4 = Column(String)
    post_score5 = Column(String)
    school_id = Column(String)

class Student_School_Relation(BaseModel, db.Model):
    """Model for the Student_School_Relation table"""
    __tablename__ = 'Student_School_Relation'

    student_id = Column(String, primary_key = True)
    school_id = Column(String)

'''
def sql(rawSql, sqlVars={}):
    "Execute raw sql, optionally with prepared query"
    assert type(rawSql)==str
    assert type(sqlVars)==dict
    res=db.session.execute(rawSql, sqlVars)
    db.session.commit()
    return res

@app.before_first_request
def initDBforFlask():
    sql("CREATE TABLE IF NOT EXISTS animals (id SERIAL PRIMARY KEY, name VARCHAR(160) UNIQUE);")
    sql("INSERT INTO animals(name) VALUES ('Lion') ON CONFLICT (name) DO NOTHING;")
    sql("INSERT INTO animals(name) VALUES ('Dragon') ON CONFLICT (name) DO NOTHING;")
    sql("INSERT INTO animals(name) VALUES ('TeroKarvinen.com') ON CONFLICT (name) DO NOTHING;")
    sql("INSERT INTO animals(name) VALUES ('Horse') ON CONFLICT (name) DO NOTHING;")
'''

@app.route("/")
def hello():
    return "Insert request"

@app.route("/get_questions", methods=['GET','POST'])
def get_questions():
    # pool = get_pool()
    # rock = Question(question_id = "50", description = "hi", keystone = "hi2", positive = "hi3", score = "hi4")
    # rock.add()
    # pool.commit()
    # questions = Question.objects.get(question_id = "50")
    print(questions)
    all_qns = []
    for i in questions:
        all_qns.append([i.question_id, i.description])
    return jsonify(all_qns)

# data input as { student_id, ans = [ [question_id, choice], [], [] ] }
@app.route("/update_results", methods=['GET','POST'])
def update_results():
    if request == "POST":
        data = request.data
        ##Sample Data
        ##  {   student_id = "",
        ##      name = "",
        ##      pw = "",
        ##      ans = []
        student_data = Question.objects.get(student_id=data["student_id"], )
        score = [0,0,0,0,0]
        for result in data["ans"]:
            objqn = Question.objects.get(question_id = result[0])
            pos = objqn.keystone-1
            score[pos] += objqn.score[result[1]-1]
        summed_score = sum(score)
        pool = get_pool()

        return

if __name__ == "__main__":
    from flask_sqlalchemy import get_debug_queries
    app.run(debug=True)