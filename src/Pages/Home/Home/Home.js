import React from 'react';
import Header from '../../../Shared/Header';
import Banner from '../Banner/Banner';
import AllDoctor from '../OurDoctor/AllDoctor';
import Service from '../OurServices/Service';

import Promotion from '../Promotion/Promotion';
import WhyChooseUS from '../WhyChoosUs/WhyChooseUS';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Promotion></Promotion>
            <WhyChooseUS></WhyChooseUS>
            <Service></Service>
            <AllDoctor></AllDoctor>
        </div>
    );
};

export default Home;