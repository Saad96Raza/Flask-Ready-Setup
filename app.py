from flask import Flask, render_template
from pypugjs.ext.jinja import PyPugJSExtension
from flask_webpack import Webpack

app = Flask(__name__, static_folder='assets', template_folder='views')


app.jinja_env.add_extension(PyPugJSExtension)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.jinja_env.auto_reload = True

app.config['WEBPACK_MANIFEST_PATH'] = 'webpack-stats.json'


webpack = Webpack()
webpack.init_app(app)

@app.route('/')
def home():
    return render_template('pages/home.pug', title="Echelon VI")

@app.route('/contact')
def contact():
    return render_template('pages/contact.pug', title="Echelon VI")

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
