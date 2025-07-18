// Type definitions for the Physiocuro website

export interface ServiceData {
  id: string;
  title: string;
  cardImage: string;
  modalImage: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  additionalInfo: {
    title: string;
    content: string;
  }[];
}

export interface CardProps {
  icon?: React.ReactNode;
  heading?: string;
  description?: string;
  animation?: string;
  padding?: string;
}

export interface ServiceCardProps {
  icon?: React.ReactNode;
  heading?: string;
  description?: string;
  animation?: string;
}

export interface ServiceModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  service: ServiceData | null;
}

export interface TreatmentCardProps {
  service: ServiceData;
  onLearnMore: () => void;
  className?: string;
}

export interface DocCardProps {}

export interface FooterProps {}

export interface GoogleReviewWidgetProps {}

export interface LocationProps {}

export interface OpenCardProps {}

export interface AboutusProps {}
