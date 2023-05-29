import React from 'react';

const HomeTechStacks = () => {
  return (
    <>
      <div className="tech-stacks-wrapper">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center">
            <img src="/images/tech-stacks/aws.png" alt="" className="tech-stack-img" />
            <img src="/images/tech-stacks/docker.png" alt="" className="tech-stack-img" />
            <img className='net light tech-stack-img' src="/images/tech-stacks/net.png" alt="" />
            <img src="/images/tech-stacks/nextjs.png" alt="" className="tech-stack-img" />
            <img className="light tech-stack-img" src="/images/tech-stacks/github.svg" alt="" />
            <img src="/images/tech-stacks/reactjs.png" alt="" className="tech-stack-img" />
            <img src="/images/tech-stacks/redis.png" alt="" className="tech-stack-img" />
            <img className='light tech-stack-img' src="/images/tech-stacks/slack.png" alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .tech-stack-img{
          max-width: 100%;
          height: auto;
        }

        @media only screen and (max-width: 768px) {
          .tech-stack-img {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default HomeTechStacks;
