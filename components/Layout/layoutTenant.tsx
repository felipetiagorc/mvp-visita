type Props = {
  children: React.ReactNode;
};
const LayoutTenant = ({ children }: Props) => {
  return (
    <>
      <h1>Tenant Public</h1>
      {children}
    </>
  );
};
export default LayoutTenant;
