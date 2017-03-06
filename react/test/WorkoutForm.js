import WorkoutForm from 'components/WorkoutForm';

describe('WorkoutForm', () => {
  let image,
      text,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <WorkoutForm
        workouts = "workouts"
        dropDown = "Dumbbell press"
        formAuth = "Auth"
        getExercises = "exercises"
      />
    );
  });

  it('should render an form tag', () => {
    expect(wrapper.find('form')).toBePresent();
  });
});
