import { useState } from 'react';
import { clients } from '../constants';
import styles from '../styles';

const Clients = () => {
	const [hovered, setHovered] = useState(false);
	const [index, setIndex] = useState(null);

	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map((client, itemIndex) => (
					<div
						onMouseEnter={() => {
							setIndex(itemIndex);
							setHovered(true);
						}}
						onMouseLeave={() => setHovered(false)}
						key={client.id}
						className={`flex-1 ${
							styles.flexCenter
						} sm:min-w-[192px] min-w-[120px] m-5 px-2 py-2 rounded-lg h-24 shadow-xl ${
							hovered && index === itemIndex && 'bg-blue-gradient'
						}`}
					>
						<img
							src={client.logo}
							alt='client_logo'
							className='sm:w-[192px] w-[100px] object-contain'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
