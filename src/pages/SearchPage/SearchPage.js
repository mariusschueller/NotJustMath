import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { listLessonPlans } from "../../util/dynamo";
import LessonPlanResultPreview from "../../components/LessonPlanResultPreview/LessonPlanResultPreview";
import "./SearchPage.css";

const SearchPage = () => {
    const [lessonPlans, setLessonPlans] = useState([]);

    useEffect(() => {
        async function getAndSetLessonPlans() {
            const results = await listLessonPlans();
            setLessonPlans(results);
        }

        getAndSetLessonPlans();
    }, [])

    return (
        <div className="page-container">
            <Header/>
            <p>This is the Search Page</p>
            <div className="search-results-container">
                {lessonPlans.map(lessonPlan => {
                    console.log(lessonPlan);
                    return <LessonPlanResultPreview key={lessonPlan.id} lessonPlanMetadata={lessonPlan} />
                })}
            </div>
        </div>
    )
}

export default SearchPage;