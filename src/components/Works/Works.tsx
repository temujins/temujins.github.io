import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Wrapper } from './works.styles';

const Works: React.FC = () => {
    return (
        <Wrapper>
            <h2 className='title'>
                selected_
                <br />
                works<span className='colored'>:</span>
            </h2>
            <div className='cardsWrapper'>
                <ProjectCard />
                <ProjectCard reverse />
                <ProjectCard />
            </div>
        </Wrapper>
    );
};

export default Works;