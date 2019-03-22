import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../css/CardWith2Sentences.css'

export const CardWith2Sentences = ({
                            FirstSentence = [<b className='highlight'>Hello</b>],
                            SecondSentence = [<b>]World!</b>],
}) => (
        <Card class="card">
            <CardContent  class="card_content">
                { FirstSentence }
                { SecondSentence }
            </CardContent>
        </Card>
);

CardWith2Sentences.propTypes = {
    FirstSentence: PropTypes.string,
    SecondSentence: PropTypes.string,
};