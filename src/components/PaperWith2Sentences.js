import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import '../css/PaperWith2Sentences.css'


export const PaperWith2Sentences = ({
                            FirstSentence = [<b>Type</b>, " de ", <b>discipline</b>, " da ", <b>group</b>],
                            SecondSentence = ["Text to ",<b> time</b>],
}) => (

        <Paper className="paper">
            <div class="paper_content">
                    { FirstSentence }
            </div>
            <div className="paper_content">
                { SecondSentence }
            </div>
        </Paper>
);


PaperWith2Sentences.propTypes = {
    FirstSentence: PropTypes.string,
    SecondSentence: PropTypes.string,
};

