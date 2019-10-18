// @flow

import React from 'react';
import TeamMember from './TeamMember';
import team from '../../../data/team.json';
import './teamPage.css';

const renderMembers = () =>
    team.map(member => (
        <li>
            <TeamMember {...member} />
        </li>
    ));

const TeamPage = () => <ul className="team">{renderMembers()}</ul>;

export default TeamPage;
