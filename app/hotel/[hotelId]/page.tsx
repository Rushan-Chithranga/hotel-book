import { getHotelById } from "@/actions/getHotelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { auth } from "@clerk/nextjs/server";
import { Hotal } from "@prisma/client";

interface HotelPageProps {
  params: {
    hotelId: string;
  };
}

const Hotel = async ({ params }: HotelPageProps) => {
  const hotel = await getHotelById(params.hotelId) as Hotal | null;
  const { userId } = auth();
  if (!userId) return <div> Not authenticated......</div>;

  if(hotel && hotel.userId !== userId) return <div>Access denite..... </div>

  return (
    <div>
      <AddHotelForm hotel={hotel}/>
    </div>
  );
};

export default Hotel;
