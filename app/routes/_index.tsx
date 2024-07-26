import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="font-sans bg-gray-200 h-screen pb-16 overflow-y-auto text-black">
      <div className="h-10 bg-gray-400 fixed w-full">TOp Bat</div>
      <div className=" bg-red-300 overflow-auto h-full mt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorem
        aliquam nemo eum impedit cupiditate praesentium numquam beatae, iusto
        aliquid totam possimus! Deserunt cupiditate eum veniam atque et facilis,
        totam consectetur qui voluptatem tenetur culpa, deleniti eaque esse,
        recusandae similique aperiam explicabo maxime optio? Blanditiis et ipsam
        doloribus voluptatum itaque. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Hic dolorem aliquam nemo eum impedit cupiditate
        praesentium numquam beatae, iusto aliquid totam possimus! Deserunt
        cupiditate eum veniam atque et facilis, totam consectetur qui voluptatem
        tenetur culpa, deleniti eaque esse, recusandae similique aperiam
        explicabo maxime optio? Blanditiis et ipsam doloribus voluptatum itaque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorem
        aliquam nemo eum impedit cupiditate praesentium numquam beatae, iusto
        aliquid totam possimus! Deserunt cupiditate eum veniam atque et facilis,
        totam consectetur qui voluptatem tenetur culpa, deleniti eaque esse,
        recusandae similique aperiam explicabo maxime optio? Blanditiis et ipsam
        doloribus voluptatum itaque. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Hic dolorem aliquam nemo eum impedit cupiditate
        praesentium numquam beatae, iusto aliquid totam possimus! Deserunt
        cupiditate eum veniam atque et facilis, totam consectetur qui voluptatem
        tenetur culpa, deleniti eaque esse, recusandae similique aperiam
        explicabo maxime optio? Blanditiis et ipsam doloribus voluptatum itaque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorem
        aliquam nemo eum impedit cupiditate praesentium numquam beatae, iusto
        aliquid totam possimus! Deserunt cupiditate eum veniam atque et facilis,
        totam consectetur qui voluptatem tenetur culpa, deleniti eaque esse,
        recusandae similique aperiam explicabo maxime optio? Blanditiis et ipsam
        doloribus voluptatum itaque. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Hic dolorem aliquam nemo eum impedit cupiditate
        praesentium numquam beatae, iusto aliquid totam possimus! Deserunt
        cupiditate eum veniam atque et facilis, totam consectetur qui voluptatem
        tenetur culpa, deleniti eaque esse, recusandae similique aperiam
        explicabo maxime optio? Blanditiis et ipsam doloribus voluptatum itaque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorem
        aliquam nemo eum impedit cupiditate praesentium numquam beatae, iusto
        aliquid totam possimus! Deserunt cupiditate eum veniam atque et facilis,
        totam consectetur qui voluptatem tenetur culpa, deleniti eaque esse,
        recusandae similique aperiam explicabo maxime optio? Blanditiis et ipsam
        doloribus voluptatum itaque. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Hic dolorem aliquam nemo eum impedit cupiditate
        praesentium numquam beatae, iusto aliquid totam possimus! Deserunt
        cupiditate eum veniam atque et facilis, totam consectetur qui voluptatem
        tenetur culpa, deleniti eaque esse, recusandae similique aperiam
        explicabo maxime optio? Blanditiis et ipsam doloribus voluptatum itaque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorem
        aliquam nemo eum impedit cupiditate praesentium numquam beatae, iusto
        aliquid totam possimus! Deserunt cupiditate eum veniam atque et facilis,
        totam consectetur qui voluptatem tenetur culpa, deleniti eaque esse,
        recusandae similique aperiam explicabo maxime optio? Blanditiis et ipsam
        doloribus voluptatum itaque.
      </div>
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <button className="btn btn-primary ">Test</button>
      </div>
    </div>
  );
}
