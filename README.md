# Azure AI Intelligent Search Project

## Project Overview
The **Azure AI Intelligent Search Application** provides an internal self-service portal for employees to search documents, policies, and other content using **natural language processing (NLP)**. It leverages **Azure AI Search** to deliver accurate, AI-powered search results for both structured and unstructured data.

---

## Project Objective
- Design and implement an **Azure AI Search application** for employee self-service.  
- Utilize **Azure native services** for AI-powered search.  
- Train and optimize **ML models** to improve search relevance.  
- Enable employees to perform **intelligent search** efficiently.

---

## Project Context & Background
Organizations generate vast data, and traditional search engines often fail with complex or unstructured queries.  
**Azure AI Search** uses machine learning and NLP to provide relevant results, improving productivity and decision-making for employees.

---

## Tools & Technologies
- **Azure AI Search** – Intelligent search service  
- **Python 3.6+** – Backend scripts, ML preprocessing  
- **Jupyter Notebook / VS Code** – Development environment  
- **.NET / Java / HTML/CSS/JS** – Frontend UI  
- **Excel** – Data collection & preprocessing  
- **Git & GitHub** – Version control  
- **Azure Static Web Apps** – Deployment  

---

## Project Structure
Azure_AI_Search_Project/
│
├── azure_search_demo/
│ ├── Backend/ # Azure Function App
│ │ ├── function_app.py
│ │ ├── host.json
│ │ └── requirements.txt
│ └── Frontend/ # HTML, CSS, JS demo portal
│ ├── app.js
│ ├── index.html
│ └── style.css
├── Data/
│ ├── Structured/
│ └── Unstructured/
├── .gitignore
└── README.md


---

## Step-by-Step Development Approach

### 1. Search Service Creation
- Create Azure AI Search Service in Azure portal  
- Configure search index and connect to data sources  
- Monitor indexer progress and validate search results  

### 2. Search Application in Portal
- Configure demo app in portal  
- Add sidebar and suggestions  
- Generate HTML prototype without writing frontend code  

### 3. Add Search to Web Page & Deploy
- Setup development environment in VS Code  
- Fork & clone search sample repository  
- Load index data using bulk import scripts  
- Deploy static web app to Azure  
- Add environment variables and Azure AI Search keys  

---

## Pre-requisites
- Active **Azure subscription**  
- Basic **Azure service knowledge**  
- Sample structured & unstructured data  
- Python 3.6+ installed  
- Git & GitHub account  

---

## Test Documentation
The project includes:  
1. **Test Design Document** – Test cases, steps, input, expected results  
2. **Test Case Template** – Verification of search queries & results  
3. **Test Scenario Template** – High-level test conditions, expected outcomes, priority  

---

## Final Deliverables
1. **Complete Project Code** – Backend & frontend scripts, ML model, data preprocessing  
2. **Power BI/Tableau Reports (Optional)** – Outputs in PPT or PDF for review  
3. **Visualization & Outputs** – Test documents, evaluation reports, Python scripts, model metrics  
4. **Execution Video** – Step-by-step demo, model evaluation metrics, ROC curve  

---

## Expected Outcomes
- Understand **ML models in Azure AI Search**  
- Perform **intelligent search** through AI-powered service  
- Train, evaluate, and customize search models  
- Deploy search-enabled website  
- Enable fast, accurate internal search for employees  

---

## How to Run Locally
1. Clone the repo:

```bash
git clone https://github.com/Hansika-Chinnam/Azure-AI-Search-Project.git
cd Azure-AI-Search-Project


2.  Install dependencies:
pip install -r azure_search_demo/Backend/requirements.txt


3.  Run backend (Azure Function App):
cd azure_search_demo/Backend
func start


4.  Open frontend:
cd ../Frontend
index.html


5.  Connect Azure AI Search keys in .env or local.settings.json

6.  Deploy using Azure Static Web Apps


Project Live Demo:

**Deployed Application:**

🔗 Live Demo: https://orange-hill-0df88df00.1.azurestaticapps.net






---

### ✅ Next Steps

1. Open your `README.md` in VS Code.  
2. Paste the content above.  
3. Save the file.  
4. Run these commands in your project folder:

```powershell
git add README.md
git commit -m "Add polished README.md for TCS iON project"
git push
