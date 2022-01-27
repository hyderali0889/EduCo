// import Navbar from '../components/navbar';
// import Footer from '../components/footer';
import * as RB from 'react-bootstrap';
import BookCard from '../components/BooksCard';
function BooksMain() {
	return (
		<div>
			{/* <Navbar /> */}
			<RB.Container>
				<div className="BooksTitle display-5 mt-5 fw-bold text-center">Books List</div>

				<RB.Row>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
				</RB.Row>
				<RB.Row>
					{' '}
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>{' '}
				</RB.Row>
				<RB.Row>
					{' '}
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
				</RB.Row>
				<RB.Row>
					{' '}
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
				</RB.Row>
				<RB.Row>
					{' '}
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
				</RB.Row>
				<RB.Row>
					{' '}
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
					<RB.Col sm={6} lg={3}>
						{' '}
						<BookCard />
					</RB.Col>
				</RB.Row>
			</RB.Container>
			{/* <Footer /> */}
		</div>
	);
}

export default BooksMain;
