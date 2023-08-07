import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
import Wave from 'react-wavify'

const Category = () => {
  const [avengersToys, setAvengersToys] = useState([]);
  const [transformersToys, setTransformersToys] = useState([]);
  const [starWarsToys, setStarWarsToys] = useState([]);

  useEffect(() => {
    fetch(`https://humpty-dumpty-toys-server.vercel.app/toys?category=Avengers`)
      .then((res) => res.json())
      .then((data) => {
        setAvengersToys(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://humpty-dumpty-toys-server.vercel.app/toys?category=Transformers`
    )
      .then((res) => res.json())
      .then((data) => {
        setTransformersToys(data);
      });
  }, []);
  const starWars = "Star Wars";
  useEffect(() => {
    fetch(
      `https://humpty-dumpty-toys-server.vercel.app/toys?category=${starWars}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStarWarsToys(data);
      });
  }, []);

  return (
    <div className="text-center">
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset=".5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <h1 className='text-center text-5xl font-bold mb-10'>Our Categories</h1>
      
      <Tabs>
        <TabList>
          <Tab>Avengers</Tab>
          <Tab>Transformers</Tab>
          <Tab>Star Wars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {avengersToys.map((toy) => (
              <Card key={toy._id} toy={toy}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {transformersToys.map((toy) => (
              <Card key={toy._id} toy={toy}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {starWarsToys.map((toy) => (
              <Card key={toy._id} toy={toy}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
