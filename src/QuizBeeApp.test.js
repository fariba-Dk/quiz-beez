import { render, screen } from '@testing-library/react';
import QuizBeeApp from './QuizBeeApp';

test('renders learn react link', () => {
  render(<QuizBeeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
