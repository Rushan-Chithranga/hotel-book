import prismadb from "@/lib/prismadb";

export const getHotelById = async (id: string) => {
    try {
        const hotel = await prismadb.hotal.findUnique({
            where: {
                id: id,
            },
            include: {
                rooms: true,
            }
        })
        if (hotel) return null;

        return hotel;
    } catch (error: any) {
        throw new Error(error);
    }
}