// Create a new file for the Plus SVG, e.g., PlusIcon.tsx
const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} style={{ width: '24px', height: '24px' }}>
      <path d="M6 2V10" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M2 6H10" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
  
  export default PlusIcon;