import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const MediumMarks = Template.bind({});
MediumMarks.args = {
  userData: {
    name: 'Mefiu Przybysz',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodMarks = Template.bind({});
GoodMarks.args = {
  userData: {
    name: 'Mefiu Przybysz',
    attendance: '90%',
    average: '5.0',
  },
};

export const BadMarks = Template.bind({});
BadMarks.args = {
  userData: {
    name: 'Mefiu Przybysz',
    attendance: '30%',
    average: '2.0',
  },
};
