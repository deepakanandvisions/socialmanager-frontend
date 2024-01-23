import React from 'react';
import { Accordion } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const FAQSection = ({ ShortsMakerField }) => {
    return (
        <div className="faqWrapper">
            <div className="container">
                <h4>FAQ</h4>
                <Accordion defaultActiveKey={['1']}>
                    {ShortsMakerField?.EditVideoApiData?.shorts_faqs &&
                        ShortsMakerField?.EditVideoApiData?.shorts_faqs.map(
                            (data, index) => (
                                <Accordion.Item
                                    data-ss={index}
                                    eventKey={index}
                                >
                                    <Accordion.Header>
                                        {data.faq_title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {data.faq_content}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        )}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;
