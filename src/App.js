
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import Stats from './components/Stats';



function App() {
  return (
    <div>
      <header className="bg-hero pb-20">
        <Navbar title="Outlaws" navitem1="About us" navitem2="Offer" navitem3="Contact" navitem4="Features" navitem5="Our Team" button="Login/Signup" />
        <Hero />
      </header>
      <section className="p-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col mx-auto gap-4 py-10 px-5 m-1 ">
            <h1 className="text-center lg:text-left text-3xl font-bold font-playfair">
              Justice Accelerated, Efficiency Elevated
            </h1>
            <h3 className="text-center lg:text-left text-lg md:text-2xl ">Our platform revolutionizes legal research and case management for commercial courts with AI-driven tools that automate document parsing, instantly extracting case details, clauses, and precedents from large volumes of text. By using machine learning models, it predicts case outcomes and timelines based on historical data, allowing for faster decision-making. The platform enables highly accurate searches across legal databases, cutting research time significantly. </h3>
          </div>
          <div className="grid md:grid-cols-2  mx-auto">
            <Stats name="Pending Cases" value="50000" percentage="50%" />
            <Stats name="Pending Cases" value="50000" percentage="50%" />
            <Stats name="Pending Cases" value="50000" percentage="50%" />
            <Stats name="Pending Cases" value="50000" percentage="50%" />

          </div>
        </div>

      </section>
      <section className="p-10 bg-features ">
        <h1 className="text-5xl text-btnbg font-playfair mb-4 px-5 ">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center ">

          <Card title="Legal Data Aggregation" info="Aggregate case laws, statutory provisions, judicial rules, and legal precedents from various sources. Stay updated with the latest legal developments to ensure precise and accurate legal research." />

          <Card title="AI-Powered Research" info="Harness the power of AI  to automate legal research. Extract relevant information from legal texts, identify key principles, and simplify complex legal documents for faster decision-making." />

          <Card title=" Predictive Analytics" info="Leverage historical case data and AI to forecast potential outcomes. The platform provides probability scores and trend analysis to assist in understanding the likelihood of various case results." />

          <Card title="Data Localization" info=" Tailor results based on jurisdiction-specific laws, regulations, and High Court procedures. Ensure that local laws and regional precedents are prioritized for better case understanding and resolution." />

        </div>
      </section>
      <footer className="p-10 bg-foot">
        <Footer title="Outlaws" mail="help@outlaws.co" no="+12 3456789" />
      </footer>

    </div >
  );
}

export default App;
