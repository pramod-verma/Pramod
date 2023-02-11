import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js'
import { motion } from 'framer-motion'
import '../../styles/global.scss'
import css from './experties.module.scss'


const Experties = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={css.wrapper}>
            <a className="anchor" id="experties"></a>
            <div className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp, i) => {
                            return (<motion.div
                                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                                className={css.exp} key={i}>
                                <div style={{ background: exp.bg }} className="flexCenter">
                                    <exp.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className='secondaryText'>{exp.projects} Projects</span>
                                </div>
                            </motion.div>);
                        })
                    }
                </div>
                <motion.div variants={textVariant(0.5)} className={css.rightSide}>
                    <span className='primaryText'>What do I help? </span>
                    {WhatDoIHelp.map((paragraph, i) => <span className='secondaryText' key={i}>{paragraph}</span>)}
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>25+</span>
                            <span className='secondaryText'>Project Completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>10+</span>
                            <span className='secondaryText'>Happy Clients</span>
                        </div>
                    </div>
                </motion.div>


            </div>
        </motion.section>
    )
}

export default Experties
