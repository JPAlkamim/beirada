import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useSessionStorage } from 'usehooks-ts';
import { MainFanArea } from './MainFanArea';
import { QuizFanArea } from './QuizFanArea';
import { SurveyFanArea } from './SurveyFanArea';
import { GuessFanArea } from './GuessFanArea';
import { RewardFanArea } from './RewardFanArea';

export const FanArea = () => {
    const [fanAreaType, setFanAreaType] = useSessionStorage('fanAreaType', '');

    return (
        <>
            <Header currentPage='AREA DO TORCEDOR'/>
            {
                fanAreaType === 'QUIZ' && (
                    <QuizFanArea />
                )
            }
            {
                fanAreaType === 'SURVEY' && (
                    <SurveyFanArea />
                )
            }
            {
                fanAreaType === 'GUESS' && (
                    <GuessFanArea />
                )
            }
            {
                fanAreaType === 'REWARD' && (
                    <RewardFanArea />
                )
            }
            {
                fanAreaType === '' && (
                    <MainFanArea />
                )
            }
            <Footer/>
        </>
    )
}