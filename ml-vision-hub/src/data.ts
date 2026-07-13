import { Service, Project, Dataset, BlogPost, MLResource, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Preprocessing',
    description: 'Transforming raw, noisy data into a highly structured, analysis-ready format with sophisticated statistical imputation and outlier handling.',
    iconName: 'Database',
    details: 'Data quality dictates model quality. I construct robust pipeline components that automatically identify anomalies, impute missing values using advanced algorithms (MICE, KNN), handle outliers through robust statistical bounds, and encode categorical structures reliably.',
    tools: ['Pandas', 'NumPy', 'Scikit-learn', 'IterativeImputer']
  },
  {
    id: 'data-analysis',
    title: 'Exploratory Data Analysis',
    description: 'Uncovering latent correlations, testing hypotheses, and deriving deep statistical insights from multi-dimensional datasets.',
    iconName: 'BarChart3',
    details: 'Using descriptive and inferential statistics to reveal underlying data patterns. I perform variance analysis, distribution fitting, feature interaction checking, and multicollinearity diagnostics to form a rock-solid foundation for feature design.',
    tools: ['Scipy Stats', 'Statsmodels', 'Pandas Profiling', 'Matplotlib']
  },
  {
    id: 'data-visualization',
    title: 'Advanced Data Visualization',
    description: 'Developing beautiful, informative, and interactive data dashboards and analytical plots that explain complex patterns clearly.',
    iconName: 'PieChart',
    details: 'Translating high-dimensional datasets into intuitive visual stories. Specialized in designing correlation heatmaps, interactive scatter plots with t-SNE/UMAP projection, decision boundary visualizations, and real-time dashboard analytics.',
    tools: ['Seaborn', 'Plotly', 'Matplotlib', 'D3.js']
  },
  {
    id: 'ml-development',
    title: 'ML Model Development',
    description: 'Designing, training, and tuning predictive models using classic machine learning algorithms optimized for accuracy and interpretability.',
    iconName: 'Cpu',
    details: 'Developing custom predictive models using state-of-the-art tree-based algorithms and linear estimators. Built-in hyperparameter optimization (Bayesian Search, Optuna) and cross-validation protocols prevent overfitting and ensure real-world robustness.',
    tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Optuna']
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Architectures',
    description: 'Constructing multi-layer artificial neural networks for complex non-linear pattern recognition and sequence modeling.',
    iconName: 'BrainCircuit',
    details: 'Designing neural network topologies optimized for custom problems. Expertise ranges from Multi-Layer Perceptrons (MLPs) for high-dimensional tabular data to specialized layer architectures with modern regularization (Dropout, LayerNorm).',
    tools: ['PyTorch', 'TensorFlow', 'Keras', 'PyTorch Lightning']
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Extracting semantic meaning, classifying sentiment, and processing unstructured text corpora with neural language models.',
    iconName: 'MessageSquareText',
    details: 'Building intelligent text processors capable of document classification, sentiment assessment, named entity recognition (NER), and semantic similarity analysis. Leveraging both classic TF-IDF representations and pre-trained Transformer embeddings.',
    tools: ['Hugging Face', 'Spacy', 'NLTK', 'Transformers']
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Systems',
    description: 'Implementing custom image classifiers, object detection networks, and pixel-level semantic segmentation tools.',
    iconName: 'Eye',
    details: 'Developing end-to-end vision pipelines that enable machines to interpret visual inputs. Expertise includes fine-tuning Deep CNNs (ResNet, EfficientNet) and real-time object localized tracking networks.',
    tools: ['OpenCV', 'PyTorch Vision', 'YOLOv8', 'Albumentations']
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & Forecasting',
    description: 'Forecasting future trends, demands, and behaviors through time-series analysis and multivariate modeling.',
    iconName: 'TrendingUp',
    details: 'Enabling forward-looking strategic decisions by modeling historical temporal data. Specialized in additive regression models, recurrent sequence architectures, and causal inference modeling.',
    tools: ['Prophet', 'Statsmodels', 'XGBoost', 'LSTMs']
  },
  {
    id: 'model-deployment',
    title: 'Scalable Model Deployment',
    description: 'Packaging model runtimes into lightning-fast, production-ready microservice APIs wrapped in Docker containers.',
    iconName: 'CloudUpload',
    details: 'Bridging the gap between sandbox training and production infrastructure. I design high-performance inference APIs, compile models to native runtimes (ONNX), configure containerization, and set up continuous inference logging.',
    tools: ['FastAPI', 'Docker', 'ONNX Runtime', 'AWS / GCP']
  },
  {
    id: 'ai-consultation',
    title: 'AI & ML Consultation',
    description: 'Advising organizations on pipeline architectures, technical feasibility studies, and optimized AI strategies.',
    iconName: 'Lightbulb',
    details: 'Helping engineering groups assess project feasibility, design scalable ML engineering architectures, optimize cloud inference budgets, and implement best practices for training reproducibility and data governance.',
    tools: ['M LOps Principles', 'Cloud Arch', 'Feasibility Studies', 'Reproducibility Frameworks']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'house-price-prediction',
    title: 'Advanced Housing Market Regressor',
    description: 'A production-grade gradient boosted regressor model designed to estimate residential property valuations with extreme precision, leveraging a combined set of geo-spatial and structural features.',
    category: 'Regression',
    tags: ['XGBoost', 'Scikit-learn', 'Optuna', 'Feature Engineering'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'R² Score', value: '0.924' },
      { name: 'Mean Abs Error', value: '$12,450' },
      { name: 'Training Time', value: '45s' }
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Engineered location-based interaction variables utilizing target-guided encoding.',
      'Achieved a Top 3% rank on local Ames valuation benchmark leaderboard.',
      'Constructed a custom automated pipeline for handling missing data structures and highly skewed features.'
    ]
  },
  {
    id: 'customer-churn-prediction',
    title: 'Enterprise Customer Churn Classifier',
    description: 'A comprehensive subscription behavior classifier that identifies churn-prone accounts by evaluating service usage trends, billing histories, and customer support touchpoints.',
    category: 'Classification',
    tags: ['Random Forest', 'LightGBM', 'SMOTE', 'SHAP Interpretability'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'AUC-ROC', value: '0.892' },
      { name: 'Recall (Churn)', value: '84.5%' },
      { name: 'Precision', value: '81.2%' }
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Resolved high class imbalance (83:17) using SMOTE and threshold-tuning strategies.',
      'Generated enterprise-critical SHAP explanation plots detailing top localized drivers of churn.',
      'Designed a RESTful API container that issues churn risk alerts with confidence metrics.'
    ]
  },
  {
    id: 'titanic-survival-prediction',
    title: 'Titanic Historical Survival Predictor',
    description: 'A classic binary classification implementation focusing on advanced feature engineering, missing age imputation using multi-variable regressions, and ensemble model stacking.',
    category: 'Classification',
    tags: ['Random Forest', 'SVM', 'Stacking Classifier', 'Feature Imputation'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'Cross-Val Accuracy', value: '83.4%' },
      { name: 'F1-Score', value: '0.811' },
      { name: 'Features Used', value: '11 engineered' }
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Extracted titles, cabin groups, and deck identifiers from unstructured passenger name fields.',
      'Imputed missing Age metrics using a custom multi-variable Iterative Regressor instead of simple means.',
      'Combined Random Forests, Extra Trees, and Logistic Regression with a meta-classifier stack.'
    ]
  },
  {
    id: 'fake-news-detection',
    title: 'Semantic Fake News Detector',
    description: 'An advanced text-mining classifier that scans textual syntax and lexical structures to evaluate the authenticity of news articles and media postings.',
    category: 'NLP',
    tags: ['TF-IDF', 'PassiveAggressive', 'BERT Embeddings', 'Spacy'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'Test Accuracy', value: '94.8%' },
      { name: 'F1-Score (Fake)', value: '0.951' },
      { name: 'Inference Speed', value: '18ms/doc' }
    ],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Cleaned massive text corpus of 20,000+ reports using advanced lemmatization and custom stop-word profiles.',
      'Compared classic TF-IDF with BERT-derived sentence-level semantic representations.',
      'Developed a Chrome extension mockup to flag suspicious text elements on current viewports.'
    ]
  },
  {
    id: 'spam-email-detection',
    title: 'Spam Filtering Engine',
    description: 'A lightweight, high-performance Naïve Bayes classifier that processes text messages and emails to separate promotional spam from legitimate communication.',
    category: 'NLP',
    tags: ['MultinomialNB', 'Text Tokenization', 'F1-Score Opt', 'NLTK'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'F1-Score', value: '0.982' },
      { name: 'Spam Recall', value: '96.8%' },
      { name: 'False Alarm Rate', value: '0.04%' }
    ],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Minimized false-positive rate to keep important communications out of spam folders.',
      'Extracted visual markers, capital letter patterns, and currency features.',
      'Deployed a rapid model pipeline running sub-millisecond local predictions.'
    ]
  },
  {
    id: 'sales-forecasting',
    title: 'Dynamic Multi-Store Demand Forecaster',
    description: 'A multivariate time-series forecasting pipeline built to anticipate retail store product demands, accounting for promotional cycles, holidays, and regional indicators.',
    category: 'Time Series',
    tags: ['Facebook Prophet', 'LightGBM', 'Lag Features', 'Time-Series Split'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'MAPE', value: '4.15%' },
      { name: 'RMSE', value: '184 units' },
      { name: 'Forecast Horizon', value: '90 days' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Engineered temporal lag variables and rolling average parameters across multiple aggregations.',
      'Integrated external macroeconomic indicators and holiday schedules to stabilize forecasts.',
      'Reduced seasonal forecasting error indices by 18% compared to traditional ARIMA baselines.'
    ]
  },
  {
    id: 'loan-approval-prediction',
    title: 'Fair Lending Risk Classifier',
    description: 'A bias-mitigated classifier engineered to assess loan eligibility profiles while actively monitoring and correcting demographic parity and equal opportunity metrics.',
    category: 'Classification',
    tags: ['LightGBM', 'Fairlearn', 'Explainable AI', 'Demographic Parity'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'Model Accuracy', value: '89.5%' },
      { name: 'Equalized Odds', value: '0.912' },
      { name: 'Demographic Gap', value: '< 2.1%' }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Utilized Fairlearn preprocessing to minimize systematic algorithmic bias against sensitive groups.',
      'Constructed a multi-layer model with high precision, balancing corporate risk with equitable access.',
      'Produced explicit feature impact reports to detail regulatory compliance and compliance guidelines.'
    ]
  },
  {
    id: 'heart-disease-prediction',
    title: 'Diagnostic Coronary Disease Evaluator',
    description: 'A clinical diagnostic assistant model that analyzes patient physiological measurements to forecast coronary arterial blockage risks with medical-grade sensitivity.',
    category: 'Deep Learning',
    tags: ['SVM', 'PyTorch MLP', 'Feature Selection', 'Clinical Diagnostics'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'Sensitivity', value: '91.2%' },
      { name: 'Specificity', value: '88.4%' },
      { name: 'AUC-ROC', value: '0.931' }
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Optimized classifier threshold settings to strictly prioritize clinical sensitivity (reducing false negatives).',
      'Applied Recursive Feature Elimination to isolate the top 8 diagnostic physical metrics.',
      'Tested SVM against a small, heavily regularized PyTorch MLP structure.'
    ]
  },
  {
    id: 'image-classification',
    title: 'Fine-Tuned Image Recognition Network',
    description: 'A fine-tuned PyTorch ResNet50 vision classifier that identifies object categories with modern transfer learning, automated image augments, and Grad-CAM localized highlights.',
    category: 'Computer Vision',
    tags: ['PyTorch', 'ResNet50', 'Transfer Learning', 'Grad-CAM'],
    githubUrl: 'https://github.com/misbahs10/Python-ML-Lab.git',
    liveUrl: '#',
    metrics: [
      { name: 'Top-1 Accuracy', value: '96.5%' },
      { name: 'Top-5 Accuracy', value: '99.2%' },
      { name: 'Avg Inference', value: '22ms' }
    ],
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Fine-tuned ImageNet weights using customized layer-wise learning rate schedules.',
      'Implemented Grad-CAM visualization heatmaps that map where the neural network looks to classify images.',
      'Integrated automated visual augments (rotations, color jitters, cropping) using Albumentations.'
    ]
  }
];

export const DATASETS: Dataset[] = [
  {
    id: 'housing-market-dataset',
    name: 'Unified Housing Market Analytics',
    size: '12.4 MB',
    format: 'CSV',
    features: ['SalePrice', 'GrLivArea', 'Neighborhood', 'YearBuilt', 'OverallQual', 'GarageCars'],
    downloadUrl: '#',
    description: 'A clean, unified dataset containing residential real estate transactions, geo-spatial tags, structural conditions, and local economic indexes.',
    downloads: 1452
  },
  {
    id: 'telco-customer-churn',
    name: 'Telco Subscriber Retention Records',
    size: '4.8 MB',
    format: 'CSV',
    features: ['CustomerID', 'Tenure', 'MonthlyCharges', 'ContractType', 'SupportTickets', 'ChurnStatus'],
    downloadUrl: '#',
    description: 'Anonymized corporate service logs tracking billing cycles, contract duration parameters, ticket feedback, and customer churn indicators.',
    downloads: 981
  },
  {
    id: 'spam-email-corpus',
    name: 'Annotated Multi-Language Spam Corpus',
    size: '1.2 MB',
    format: 'JSON',
    features: ['MessageText', 'Label (Spam/Ham)', 'SenderDomain', 'ContainsLink', 'WordCount'],
    downloadUrl: '#',
    description: 'A hand-labeled language processing database containing message strings, character counts, promotional word triggers, and metadata markers.',
    downloads: 733
  },
  {
    id: 'clinical-heart-health',
    name: 'Coronary Physiology & Indicators',
    size: '850 KB',
    format: 'CSV',
    features: ['Age', 'RestingBP', 'Cholesterol', 'MaxHeartRate', 'Thalassemia', 'CardiacRisk'],
    downloadUrl: '#',
    description: 'De-identified clinical indicators and laboratory profiles mapping cardiovascular performance statistics to blockage outcomes.',
    downloads: 1104
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'what-is-machine-learning',
    title: 'What is Machine Learning? A Modern Engineer’s Perspective',
    category: 'Foundations',
    readTime: '6 min read',
    date: 'Jul 10, 2026',
    excerpt: 'Demystifying the math, data feedback loops, and architectures that allow computers to extract complex patterns from raw experience without explicit procedural rules.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    content: [
      'At its core, Machine Learning is a paradigm shift in software engineering. Instead of writing hand-coded procedural statements that tell a program exactly how to solve a problem, we provide the program with a model structure and a dataset of inputs paired with expected outcomes.',
      'The model then leverages optimization algorithms—such as Gradient Descent—to systematically tune internal parameters (weights and biases), minimizing its prediction error over time.',
      'This process of iterative adjustment is called training. It allows programs to adapt and resolve problems that are far too complex for traditional rule-based algorithms, such as real-time facial recognition, conversational dialogue generation, and autonomous vehicle controls.'
    ]
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning: Classification vs. Regression Architectures',
    category: 'Algorithms',
    readTime: '8 min read',
    date: 'Jun 28, 2026',
    excerpt: 'An in-depth review of labeled-data algorithms, highlighting structural differences between continuous value regression and categorical boundary classification.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    content: [
      'Supervised Learning is the most widely deployed branch of Machine Learning. It represents tasks where every data point in the training set is accompanied by a ground-truth label—an explicit answer we want our model to learn to predict.',
      'We divide Supervised Learning into two primary categories: Regression, which models continuous numerical values (e.g., predicting an asset’s future price or temperature swings), and Classification, which models discrete category designations (e.g., labeling an email as spam or non-spam).',
      'The mathematical mechanics of these structures differ significantly: regression models utilize continuous error loss functions like Mean Squared Error (MSE), whereas classification systems employ boundary-focused functions like Binary Cross-Entropy.'
    ]
  },
  {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning: Mapping High-Dimensional Latent Spaces',
    category: 'Algorithms',
    readTime: '7 min read',
    date: 'May 15, 2026',
    excerpt: 'Exploring how clustering techniques and dimensionality reduction engines expose structural order within completely unlabeled data collections.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    content: [
      'What happens when your dataset has no labels? This is the domain of Unsupervised Learning, where the goal is to discover hidden structures, groupings, and clusters within raw datasets without any guidance.',
      'Primary methodologies include Clustering algorithms like K-Means and Hierarchical Clustering, which partition data into organic subgroups based on mathematical distance metrics, and Dimensionality Reduction techniques like PCA, t-SNE, and UMAP.',
      'These mathematical reductions compress hundreds of variables into simple 2D or 3D coordinate planes, making massive datasets humanly interpretable while preserving critical correlation structures.'
    ]
  },
  {
    id: 'deep-learning-intro',
    title: 'Deep Learning: Inside the Architecture of Multi-Layer Neural Networks',
    category: 'Neural Networks',
    readTime: '10 min read',
    date: 'Apr 22, 2026',
    excerpt: 'From artificial neurons and activation functions to backpropagation and layered representations—how Deep Learning models hierarchical features.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    content: [
      'Deep Learning is a subset of Machine Learning inspired by the human brain’s neural network structures. It relies on Stacked Networks of artificial neurons (nodes) that process signals and learn hierarchical features.',
      'Unlike classical ML, which requires manual, expert-driven feature extraction, a deep network automatically extracts optimal features directly from raw data. For instance, in an image, lower layers recognize lines, mid-layers identify geometric shapes, and deep layers map complex semantic components like eyes or wheels.',
      'Tuning millions of internal parameters across hundreds of hidden layers is made possible by Backpropagation and Automatic Differentiation, which pass derivative error signals backward through the network to update weight gradients.'
    ]
  },
  {
    id: 'data-preprocessing',
    title: 'Data Preprocessing: The Critical 80% of Machine Learning Work',
    category: 'Practices',
    readTime: '7 min read',
    date: 'Mar 12, 2026',
    excerpt: 'Why standardizing scales, handling structural gaps, and encoding categorical labels is the single most decisive factor in real-world model reliability.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1543616901-f440aa95ac9a?auto=format&fit=crop&w=800&q=80',
    content: [
      'In professional ML engineering, the adage holds true: "Garbage In, Garbage Out." A models final accuracy is strictly bounded by the structural quality of its inputs.',
      'Preprocessing involves cleaning missing entries, resolving structural inconsistencies, and putting numerical properties onto a uniform scale (such as MinMaxScaling or StandardScaler).',
      'Failing to standardize scales can cause algorithms like K-Nearest Neighbors, SVMs, and gradient descent optimizations to be heavily distorted by features with naturally larger ranges, leading to poor model performance.'
    ]
  },
  {
    id: 'feature-engineering',
    title: 'Artisan Feature Engineering: Maximizing Signal from Raw Attributes',
    category: 'Practices',
    readTime: '9 min read',
    date: 'Feb 05, 2026',
    excerpt: 'How creating polynomial interactions, extracting temporal cycles, and structuring text-based metrics transforms basic algorithms into high-impact systems.',
    author: 'AI Specialist',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    content: [
      'Feature Engineering is the process of using domain knowledge to construct new, highly informative variables from raw dataset variables, dramatically simplifying the learning path for your model.',
      'Examples include extracting hour, day-of-week, and cyclical sinusoidal curves from raw timestamps, generating mathematical interaction terms between linked properties, or applying targeted groupings to high-cardinality strings.',
      'By baking logical relationships directly into the data vectors, we often enable a simple, highly interpretable model to match or exceed the performance of an opaque deep network.'
    ]
  }
];

export const RESOURCES: MLResource[] = [
  {
    id: 'book-1',
    category: 'Books',
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras, & TensorFlow',
    description: 'An absolute masterpiece of practical engineering, explaining fundamental concepts with clean code and minimal math jargon.',
    url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125691/',
    tag: 'Aurelien Geron'
  },
  {
    id: 'book-2',
    category: 'Books',
    title: 'An Introduction to Statistical Learning (ISLR)',
    description: 'The golden entry-point for learning the statistical intuition, modeling parameters, and mathematical foundations behind classic ML models.',
    url: 'https://www.statlearning.com/',
    tag: 'James, Witten, Hastie, Tibshirani'
  },
  {
    id: 'book-3',
    category: 'Books',
    title: 'Deep Learning by Ian Goodfellow',
    description: 'Commonly known as "The Deep Learning Bible," providing rigorous explanations of deep neural networks, linear algebra, and optimizations.',
    url: 'https://www.deeplearningbook.org/',
    tag: 'Goodfellow, Bengio, Courville'
  },
  {
    id: 'tut-1',
    category: 'Tutorials',
    title: 'Fast.ai - Practical Deep Learning for Coders',
    description: 'A brilliant top-down, hands-on software curriculum that gets you building world-class neural networks on Day 1.',
    url: 'https://course.fast.ai/',
    tag: 'Jeremy Howard'
  },
  {
    id: 'tut-2',
    category: 'Tutorials',
    title: 'Scikit-learn Official User Guides',
    description: 'Highly detailed documentation and code examples explaining how to configure cross-validation, estimators, and preprocess pipelines.',
    url: 'https://scikit-learn.org/stable/user_guide.html',
    tag: 'Official Docs'
  },
  {
    id: 'tut-3',
    category: 'Tutorials',
    title: 'TensorFlow Core Tutorials',
    description: 'End-to-end learning pathways covering image classification, text generation, autoencoders, and deployment structures.',
    url: 'https://www.tensorflow.org/tutorials',
    tag: 'Google Developers'
  },
  {
    id: 'lib-1',
    category: 'Libraries',
    title: 'Pandas - Powerful Python Data Analysis Toolkit',
    description: 'The absolute standard for tabular manipulation, custom indexing, merging, and fast time-series calculations.',
    url: 'https://pandas.pydata.org/',
    tag: 'Python Core Library'
  },
  {
    id: 'lib-2',
    category: 'Libraries',
    title: 'NumPy - The Fundamental Package for Scientific Computing',
    description: 'Enables ultra-fast, multi-dimensional array operations, matrix mathematics, and vectorization foundations.',
    url: 'https://numpy.org/',
    tag: 'Python Core Library'
  },
  {
    id: 'lib-3',
    category: 'Community',
    title: 'Kaggle - Machine Learning & Data Science Community',
    description: 'Access thousands of free high-quality datasets, join competitive coding challenges, and study shared Jupyter notebooks.',
    url: 'https://www.kaggle.com/',
    tag: 'Global Platform'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the main difference between Supervised and Unsupervised Learning?',
    answer: 'Supervised Learning uses labeled datasets (each entry is paired with a clear, known answer) to train models to forecast outcomes or classify classes. Unsupervised Learning uses completely unlabeled data, meaning the algorithm is designed to discover natural groupings, underlying densities, or patterns independently.',
    category: 'Core Concepts'
  },
  {
    id: 'faq-2',
    question: 'How do you detect and prevent Overfitting in machine learning models?',
    answer: 'Overfitting occurs when a model learns the noise and random fluctuations of the training data rather than the true underlying pattern, causing it to fail on unseen data. We detect this by measuring a gap between training error and validation/test error. We prevent it using: 1) Cross-Validation, 2) Regularization (L1 Lasso, L2 Ridge, Dropout), 3) Pruning/Simpler model architectures, 4) Collecting more data, and 5) Early Stopping during neural network training.',
    category: 'Model Tuning'
  },
  {
    id: 'faq-3',
    question: 'Why is Data Scaling necessary for certain ML algorithms?',
    answer: 'Algorithms that measure geometric distance (such as SVMs, KNN, K-Means) or rely on gradient descent optimization (Neural Networks, Logistic Regression) are heavily distorted if features have vastly different numerical ranges. For example, if "Income" is in tens of thousands and "Age" is between 1 and 100, the distance calculation will be dominated by Income. Scaling standardizes or normalizes these properties into uniform, comparable bounds.',
    category: 'Data Preprocessing'
  },
  {
    id: 'faq-4',
    question: 'What is hyperparameter tuning and how is it done?',
    answer: 'Parameters are values learned by the model automatically during training (like weights and biases). Hyperparameters are configuration settings we choose before training that dictate the learning process (like learning rate, tree depth, or regularization coefficient). Tuning is the process of searching for the optimal combination of these settings, often using automated tools like Random Search, Grid Search, or Bayesian Optimization engines (e.g. Optuna).',
    category: 'Model Tuning'
  },
  {
    id: 'faq-5',
    question: 'What tools do you use to package and deploy Machine Learning models into production?',
    answer: 'I typically package trained estimators into lightweight serialization formats like ONNX or pickle, then wrap them in high-performance FastAPI microservices in Python. We bundle this setup into Docker containers for reliable, isolated execution, making it trivial to host on modern cloud platforms (AWS, GCP, Heroku, or Cloud Run) behind API gateways.',
    category: 'Deployment'
  },
  {
    id: 'faq-6',
    question: 'What is the difference between Precision and Recall? When would you prioritize one over the other?',
    answer: 'Precision measures how many of your predicted positives were actually positive (minimizing false alarms). Recall measures how many of the actual positives you successfully captured (minimizing false negatives). You prioritize Recall when missing a positive is highly critical, such as diagnostic cancer checks. You prioritize Precision when false alarms are very costly or annoying, such as spam email triggers.',
    category: 'Core Concepts'
  }
];
