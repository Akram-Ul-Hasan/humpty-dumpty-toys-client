import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

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
        fetch(`https://humpty-dumpty-toys-server.vercel.app/toys?category=Transformers`)
          .then((res) => res.json())
          .then((data) => {
            setTransformersToys(data);
          });
      }, []);
      const starWars= 'Star Wars';
    useEffect(() => {
        fetch(`https://humpty-dumpty-toys-server.vercel.app/toys?category=${starWars}`)
          .then((res) => res.json())
          .then((data) => {
            setStarWarsToys(data);
          });
      }, []);


  return (
    <div className="text-center">
        <h2 className="">Our Categories</h2>
      <Tabs>
        <TabList>
          <Tab >Avengers</Tab>
          <Tab >Transformers</Tab>
          <Tab >Star Wars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                avengersToys.map(toy=> <Card key={toy._id} toy={toy}></Card>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                transformersToys.map(toy=> <Card key={toy._id} toy={toy}></Card>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                starWarsToys.map(toy=> <Card key={toy._id} toy={toy}></Card>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
