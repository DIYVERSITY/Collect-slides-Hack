#Grant Writer API
from flask import Flask, request
from flask_cors import CORS
import os
import openai
import json

app = Flask(__name__)
CORS(app)

openai.api_key = ""

def getBiography(biographyData):

    prompt = '''
            {"name":"Alex Drysdale","role":"Junior Web Developer","company":"Oswald Technologies","education":"California Institute of Technology","degree":"Bachelor's Degree in Software Development","major":"computer science","accomplishments":["2015 Edmund Gains Award"],"person":"first"}

            "My name is Alex Drysdale and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day at Oswald Tech. I graduated from the California Institute of Technology in 2016 with a Bachelor's Degree in Software Development. While in school, I earned the 2015 Edmund Gains Award for my exemplary academic performance and leadership skills."

            {"name":"Mary Jones","role":"Administrative Assistant","hobbies":['hike', 'crochet' , 'play video games'],"person":"third"}

            “Mary Jones is an Administrative Assistant with eight years of experience working alongside the executive team of a Fortune 500 company. Mary specializes in administrative technology and is responsible for educating other employees on using progressive systems and applications, including accounting software, mass communication procedures and organizational apps. Mary is a powerful force in the workplace and uses her positive attitude and tireless energy to encourage others to work hard and succeed. Mary is inspired daily by her husband and their two daughters. In her free time, Mary likes to hike, crochet and play video games with her grandson."

            {"name":"Matt Glodz","role":"Founder and Managing Partner","company":"Resume Pilots","education":"Cornell University","major":"business communication", accomplishments":['Certified Professional Resume Writer','Chicago Tribune publication'],"person":"third"}

            "Matt Glodz is the Founder and Managing Partner of Resume Pilots and a Certified Professional Resume Writer.After studying business communication at Cornell University, Matt worked within Fortune 500 companies, where he noted that qualified candidates were frequently denied interview opportunities due to poorly written documents.At Resume Pilots, Matt combines his business and writing background - which includes prior work for a Chicago Tribune publication - to craft resumes that give his clients the best chance of landing interviews. He works with clients ranging from CEOs to recent graduates and has been writing resumes for over eight years."

            {"name":"Lara Rossi","role":"marketer","company":"ICMP","person":"first","past-esperience":"retail","hobbies":["live music","DJing","music podcast"]}
            
            "My name is Lara Rossi, I like to call myself a marketing expert with a twist; beside my experience as a marketer at ICMP. I also spent several years in retail. This has made me the accomplished, humble and proud professional I am today.I also enjoy live music, DJing, and curating my music podcast."
            
            
            '''

    prompt += str(biographyData)

    response = openai.Completion.create(engine="davinci", prompt=prompt , max_tokens=250)
    print(response.choices[0].text)
    return response.choices[0].text

def getElevatorPitch(elevatorpitchData):
    print(elevatorpitchData)

    prompt = '''
            {"solution":"control remotely cooking devices"}

            "We design an advanced smart hub technology that enables users to interconnect and remotely monitor all of their cooking devices and kitchen appliances through a single user-friendly platform."

            {"mission":"local businesses compete with larger national brands","problem":"traditional marketing are coming to an end","those unable to adapt are being left behind","company":"LiveShopBuy"}

            "LiveShopBuy is a location-based sales and marketing platform designed to help small, local businesses compete with larger national brands in the digital realm. As things currently stand, small local businesses are fighting an uphill battle when it comes to gaining exposure. The days of traditional marketing are coming to an end - and with so much of a consumer’s attention devoted to their devices, those unable to adapt are being left behind. But thanks to LiveShopBuy, these local businesses now have everything they need to level the playing field."
            
            
            '''

    prompt += str(elevatorpitchData)

    response = openai.Completion.create(engine="davinci", prompt=prompt , max_tokens=70)
    print(response.choices[0].text)
    return response.choices[0].text

def getMarketValue(industry):
    print(industry)

    prompt = 'How big is the '+industry+' industry?'

    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        temperature=0.5,
        max_tokens=200,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response.choices[0].text)
    return response.choices[0].text

def getMarketChallenges(industry):
    print(industry)

    prompt = industry+' Industry - Market challenges'

    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        temperature=0.5,
        max_tokens=200,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response.choices[0].text)
    return 'Market challenges '+response.choices[0].text

@app.route('/')
def index():
    biography = request.args.get('biography')
    biography = getBiography(biography)
    print(biography)
    elevatorpitch = request.args.get('elevatorpitch')
    elevatorpitch = getElevatorPitch(elevatorpitch)
    print(elevatorpitch)
    industry = request.args.get('industry')
    marketChallenges = getMarketChallenges(industry)
    print(marketChallenges)
    marketValue = getMarketValue(industry)
    print(marketValue)

    grantQuestions = {'biography':biography.strip(),'elevatorpitch':elevatorpitch.strip(),'marketValue':marketValue.strip(), 'marketChallenges':marketChallenges.strip() }
    return grantQuestions

@app.route('/Biography')
def Biography():
    biography = request.args.get('biography')
    biography = getBiography(biography)
    print(biography)
    return biography.strip()

@app.route('/Elevatorpitch')
def Elevatorpitch():
    elevatorpitch = request.args.get('elevatorpitch')
    elevatorpitch = getElevatorPitch(elevatorpitch)
    print(elevatorpitch)
    return elevatorpitch.strip()

@app.route('/MarketValue')
def MarketValue():
    industry = request.args.get('industry')
    marketValue = getMarketValue(industry)
    print(marketValue)
    return marketValue.strip()

@app.route('/MarketChallenges')
def MarketChallenges():
    industry = request.args.get('industry')
    marketChallenges = getMarketChallenges(industry)
    print(marketChallenges)
    return marketChallenges.strip()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')







