# Team - Asteroid Destroyer
---

# HWO Exoplanet Characterization Platform - Speculo

**An Interactive 3D Web Platform to help HWO(Habitable Worlds Observatory) characterize exoplanets**

## Overview

Welcome to the **HWO Exoplanet Characterization Platform**, a web-based 3D interactive tool built to assist the **Habitable World Observatory (HWO)** in characterizing exoplanets. Our platform helps visualize which of the currently known exoplanets are observable by HWO, assessing their potential for detailed study. By providing a comprehensive overview of potential observational paths across our galaxy, our platform makes it easier to evaluate which exoplanets in our solar neighborhood are viable targets for exploration.

## Problem Statement (Challenge)

The **Habitable World Observatory (HWO)** aims to identify and characterize exoplanets that might harbor life. The challenge lies in determining which exoplanets are observable and characterizable using HWO's future capabilities. Our platform addresses this challenge by:

- Visualizing observational paths to known exoplanets.
- Evaluating the potential of each exoplanet for in-depth characterization.
- Helping HWO prioritize interesting targets for future exploration.

## Demo and Links

A live demo is available to showcase how users can explore the observational paths to exoplanets, filter by various criteria, and interact with 3D visualizations of the galaxy.

[Live App](https://hwo-navigation.vercel.app/)
[Server Repository](https://github.com/kapeesh-kaul/asteroid-destroyers-nasa-app-challenge-server)
[Client Repository](https://github.com/KlausMikhaelson/asteroid-destroyers-nasa-app-challenge)

## Target Users

- Astronomers and astrophysicists working with HWO.
- Scientists interested in exoplanet habitability research.
- Researchers analyzing data from space missions.
- Students and enthusiasts seeking to explore the field of exoplanet science.

## Solution Overview

The **HWO Exoplanet Characterization Platform** provides a 3D interactive visualization that displays exoplanet locations and their observational paths from Earth. Users can explore different datasets and view detailed information about each exoplanet's habitability and characterization potential.

### Architecture Overview

- **Frontend**: A React-based interface integrated with `@react-three/fiber` and `@react-three/drei` to visualize the galaxy and exoplanets.
- **Server**: Node.js and Express backend to process requests and handle API endpoints.
- **Primary Datastores**:
  - NASA's Exoplanet Archive
  - Gaia Mission Data
  - Preprocessed datasets for habitability characterization

### Components Overview

- **PS Comp (Primary)**: The core processing system for astronomical data.
- **PS**: The planetary system renderer for visualizing exoplanetary data.
- **Server**: Backend services for managing data and requests.
- **Frontend**: User-facing interactive 3D visualizations.
- **ML Overview**: Machine learning models used for analyzing and categorizing exoplanet data.

## Machine Learning Models

### 1. Nearest Neighbors
- **Purpose**: To identify exoplanets with similar characteristics. If HWO identifies one exoplanet of interest, it can easily find others with similar properties.
  
### 2. Classification Models
- **Category Classification**: Exoplanets are categorized into known types (e.g., Neptunian, Super Earth, Gas Giant, Terrestrial) based on physical attributes such as size and temperature.
- **Clustering Analysis**: To explore if exoplanets naturally cluster based on their properties.
  
### 3. LLM-Based Classification (ChatGPT API)
- **Purpose**: Planet parameters are passed to a large language model (e.g., ChatGPT) to determine habitability. This allows for a sophisticated analysis of exoplanetary habitability using real-time models.

## Visualization

### Relative Scaling of Features
- **Planet Radius, Distance, Coordinates**: Visualizations are created using relative scaling derived from attributes such as radius, distance, and other planetary parameters.
- **Centering the View**: The visual model uses the Earth or our planetary system as the central reference point, allowing users to understand the relationship between Earth and other exoplanets.

### Telescopes & Observational Paths
- **Earth-Based Observatories**: Visualization focuses on telescopic paths from Earth-based telescopes.
- **Space-Based Observatories**: Future plans include support for space-based telescope visualization.

## Exoplanet Categorization

### Classification of Exoplanets
We classify exoplanets based on NASA's categories:
- **Gas Giant**: Radius > 10 Earth radii and Temperature > 1000 K.
  - *Description*: Large, hot planets with thick gaseous atmospheres, like "hot Jupiters."
  - *Reference*: Fortney et al., 2007.
  
- **Super Earth**: Radius between 1.25 and 2 Earth radii; Temperature between 250 and 500 K.
  - *Description*: Rocky planets larger than Earth but smaller than gas giants.
  - *Reference*: Valencia et al., 2007.
  
- **Terrestrial**: Radius ≤ 1.25 Earth radii; Temperature between 250 and 350 K.
  - *Description*: Rocky planets similar to Earth, possibly habitable.
  - *Reference*: Lammer et al., 2009.
  
- **Neptunian**: Radius between 2 and 10 Earth radii; Temperature < 1000 K.
  - *Description*: Planets with thick atmospheres and icy/rocky cores.
  - *Reference*: Madhusudhan et al., 2012.

### Habitability Calculations
1. **Distance from Habitable Zone (HZ Score)**: Indicates the likelihood of a planet having suitable conditions for liquid water.
   - *Reference*: Kasting et al., 1993.

2. **Planet Size Score**: A Gaussian distribution prioritizes planets between 0.5 and 2 Earth radii.
   - *Reference*: Kopparapu et al., 2013.

3. **Equilibrium Temperature Score**: Gaussian distribution centered around 300 K, indicating the likelihood of having liquid water.
   - *Reference*: Selsis et al., 2007.

4. **Orbital Eccentricity Score**: Planets with near-circular orbits are more likely to have stable climates suitable for life.
   - *Reference*: Williams & Pollard, 2002.

Combining these factors yields a multi-dimensional assessment of habitability, emphasizing the importance of meeting multiple conditions for a planet to be considered potentially habitable.

### SNR Calculation for Exoplanet Characterization
The **Signal-to-Noise Ratio (SNR)** calculation assesses the detectability of exoplanets:
- Considers stellar radius, planetary radius, telescope diameter, and distances.
- Provides insights into how well an exoplanet can be characterized using available telescopes.

## Future Scope

- **Space-Based Observations**: Incorporate visualizations for telescopic observations from space.
- **Improved ML Models**: Refine models to improve habitability analysis and classification accuracy.
- **Integration with Real-Time Data**: Expand data sources to include real-time astronomical observations.

## Installation of frontend

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/KlausMikhaelson/asteroid-destroyers-nasa-app-challenge
   cd asteroid-destroyers-nasa-app-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Add an OpenAI Api key in .env file in the root folder**
   ```bash
   REACT_APP_OPENAI_API_KEY=
   ```

3. **Run the development client**:
   ```bash
   npm start
   ```

4. **Open in your browser**:
   Navigate to `http://localhost:3000` to view the platform.

   
## Installation of server

1. **Clone the server repository**:
   ```bash
   git clone https://github.com/kapeesh-kaul/asteroid-destroyers-nasa-app-challenge-server
   cd asteroid-destroyers-nasa-app-challenge-server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Add an OpenAI Api key in .env file in the root folder**

3. **Run the development client**:
   ```bash
   npm start
   ```

4. **Add a .env file in the frontend repository and add the localhost link there like below**:
   ```bash
   REACT_APP_API_URL=
   ```


## License

This project is licensed under the MIT License.

## Team

- Satyam Singh <br />
  [LinkedIn](https://www.linkedin.com/in/satyamsingh2003/) <br />
  email: satyamsinghsrc5076@gmail.com
- Kapeesh Kaul <br />
  [LinkedIn](https://www.linkedin.com/in/kapeesh-kaul-a82438150/) <br />
  email: kapeeshkaul@gmail.com
- Sathyajit Loganathan <br />
  [LinkedIn](https://www.linkedin.com/in/sathyajit-loganathan/) <br />
  email: loganathansathyajit@gmail.com
- Khoi Nguyen <br />
  [LinkedIn](https://www.linkedin.com/in/khoi-nguyen-b1a4a92b3/) <br />
  email: haiznpk04@gmail.com
  
